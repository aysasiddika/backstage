/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { useState } from 'react';
import useAsyncRetry from 'react-use/lib/useAsyncRetry';
import { jenkinsApiRef } from '../api';
import { errorApiRef, useApi } from '@backstage/core-plugin-api';
import { useEntity } from '@backstage/plugin-catalog-react';
import { getCompoundEntityRef } from '@backstage/catalog-model';
import { JENKINS_ANNOTATION, LEGACY_JENKINS_ANNOTATION } from '../constants';

export enum ErrorType {
  CONNECTION_ERROR,
  NOT_FOUND,
}

export function useJobRuns() {
  const { entity } = useEntity();
  const api = useApi(jenkinsApiRef);
  const errorApi = useApi(errorApiRef);

  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  const [error, setError] = useState<{
    message: string;
    errorType: ErrorType;
  }>();

  const jobFullName =
    entity.metadata.annotations?.[JENKINS_ANNOTATION] ||
    entity.metadata.annotations?.[LEGACY_JENKINS_ANNOTATION] ||
    '';

  const { loading, value: jobRuns } = useAsyncRetry(async () => {
    try {
      const jobBuilds = await api.getJobBuilds({
        entity: getCompoundEntityRef(entity),
        jobFullName,
      });

      setTotal(jobBuilds.builds.length);

      return jobBuilds;
    } catch (e) {
      const errorType = e.notFound
        ? ErrorType.NOT_FOUND
        : ErrorType.CONNECTION_ERROR;
      setError({ message: e.message, errorType });
      throw e;
    }
  }, [api, errorApi, entity]);

  return [
    {
      page,
      pageSize,
      loading,
      jobRuns,
      total,
      error,
    },
    {
      setPage,
      setPageSize,
    },
  ] as const;
}
