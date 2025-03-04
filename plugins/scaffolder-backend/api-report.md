## API Report File for "@backstage/plugin-scaffolder-backend"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { ActionContext as ActionContext_2 } from '@backstage/plugin-scaffolder-node';
import { CatalogApi } from '@backstage/catalog-client';
import { Config } from '@backstage/config';
import { createPullRequest } from 'octokit-plugin-create-pull-request';
import { Duration } from 'luxon';
import { executeShellCommand as executeShellCommand_2 } from '@backstage/plugin-scaffolder-node';
import { ExecuteShellCommandOptions } from '@backstage/plugin-scaffolder-node';
import express from 'express';
import { fetchContents as fetchContents_2 } from '@backstage/plugin-scaffolder-node';
import { GithubCredentialsProvider } from '@backstage/integration';
import { HumanDuration } from '@backstage/types';
import { IdentityApi } from '@backstage/plugin-auth-node';
import { JsonObject } from '@backstage/types';
import { Knex } from 'knex';
import { Logger } from 'winston';
import { Octokit } from 'octokit';
import { PermissionEvaluator } from '@backstage/plugin-permission-common';
import { PermissionRule } from '@backstage/plugin-permission-node';
import { PermissionRuleParams } from '@backstage/plugin-permission-common';
import { PluginDatabaseManager } from '@backstage/backend-common';
import { PluginTaskScheduler } from '@backstage/backend-tasks';
import { RESOURCE_TYPE_SCAFFOLDER_ACTION } from '@backstage/plugin-scaffolder-common/alpha';
import { RESOURCE_TYPE_SCAFFOLDER_TEMPLATE } from '@backstage/plugin-scaffolder-common/alpha';
import { ScaffolderEntitiesProcessor as ScaffolderEntitiesProcessor_2 } from '@backstage/plugin-catalog-backend-module-scaffolder-entity-model';
import { Schema } from 'jsonschema';
import { ScmIntegrationRegistry } from '@backstage/integration';
import { ScmIntegrations } from '@backstage/integration';
import { SerializedTask as SerializedTask_2 } from '@backstage/plugin-scaffolder-node';
import { SerializedTaskEvent as SerializedTaskEvent_2 } from '@backstage/plugin-scaffolder-node';
import { TaskBroker as TaskBroker_2 } from '@backstage/plugin-scaffolder-node';
import { TaskBrokerDispatchOptions as TaskBrokerDispatchOptions_2 } from '@backstage/plugin-scaffolder-node';
import { TaskBrokerDispatchResult as TaskBrokerDispatchResult_2 } from '@backstage/plugin-scaffolder-node';
import { TaskCompletionState as TaskCompletionState_2 } from '@backstage/plugin-scaffolder-node';
import { TaskContext as TaskContext_2 } from '@backstage/plugin-scaffolder-node';
import { TaskEventType as TaskEventType_2 } from '@backstage/plugin-scaffolder-node';
import { TaskSecrets as TaskSecrets_2 } from '@backstage/plugin-scaffolder-node';
import { TaskSpec } from '@backstage/plugin-scaffolder-common';
import { TaskSpecV1beta3 } from '@backstage/plugin-scaffolder-common';
import { TaskStatus as TaskStatus_2 } from '@backstage/plugin-scaffolder-node';
import { TemplateAction as TemplateAction_2 } from '@backstage/plugin-scaffolder-node';
import { TemplateActionOptions } from '@backstage/plugin-scaffolder-node';
import { TemplateEntityStepV1beta3 } from '@backstage/plugin-scaffolder-common';
import { TemplateFilter as TemplateFilter_2 } from '@backstage/plugin-scaffolder-node';
import { TemplateGlobal as TemplateGlobal_2 } from '@backstage/plugin-scaffolder-node';
import { TemplateParametersV1beta3 } from '@backstage/plugin-scaffolder-common';
import { UrlReader } from '@backstage/backend-common';
import { ZodType } from 'zod';
import { ZodTypeDef } from 'zod';

// @public @deprecated (undocumented)
export type ActionContext<TInput extends JsonObject> = ActionContext_2<TInput>;

// @public (undocumented)
export type ActionPermissionRuleInput<
  TParams extends PermissionRuleParams = PermissionRuleParams,
> = PermissionRule<
  TemplateEntityStepV1beta3 | TemplateParametersV1beta3,
  {},
  typeof RESOURCE_TYPE_SCAFFOLDER_ACTION,
  TParams
>;

// @public
export const createBuiltinActions: (
  options: CreateBuiltInActionsOptions,
) => TemplateAction_2[];

// @public
export interface CreateBuiltInActionsOptions {
  additionalTemplateFilters?: Record<string, TemplateFilter>;
  // (undocumented)
  additionalTemplateGlobals?: Record<string, TemplateGlobal>;
  catalogClient: CatalogApi;
  config: Config;
  integrations: ScmIntegrations;
  reader: UrlReader;
}

// @public
export function createCatalogRegisterAction(options: {
  catalogClient: CatalogApi;
  integrations: ScmIntegrations;
}): TemplateAction_2<
  | {
      catalogInfoUrl: string;
      optional?: boolean | undefined;
    }
  | {
      repoContentsUrl: string;
      catalogInfoPath?: string | undefined;
      optional?: boolean | undefined;
    },
  JsonObject
>;

// @public
export function createCatalogWriteAction(): TemplateAction_2<
  {
    entity: Record<string, any>;
    filePath?: string | undefined;
  },
  JsonObject
>;

// @public
export function createDebugLogAction(): TemplateAction_2<
  {
    message?: string | undefined;
    listWorkspace?: boolean | undefined;
  },
  JsonObject
>;

// @public
export function createFetchCatalogEntityAction(options: {
  catalogClient: CatalogApi;
}): TemplateAction_2<
  {
    entityRef?: string | undefined;
    entityRefs?: string[] | undefined;
    optional?: boolean | undefined;
    defaultKind?: string | undefined;
    defaultNamespace?: string | undefined;
  },
  {
    entity?: any;
    entities?: any[] | undefined;
  }
>;

// @public
export function createFetchPlainAction(options: {
  reader: UrlReader;
  integrations: ScmIntegrations;
}): TemplateAction_2<
  {
    url: string;
    targetPath?: string | undefined;
  },
  JsonObject
>;

// @public
export function createFetchPlainFileAction(options: {
  reader: UrlReader;
  integrations: ScmIntegrations;
}): TemplateAction_2<
  {
    url: string;
    targetPath: string;
  },
  JsonObject
>;

// @public
export function createFetchTemplateAction(options: {
  reader: UrlReader;
  integrations: ScmIntegrations;
  additionalTemplateFilters?: Record<string, TemplateFilter>;
  additionalTemplateGlobals?: Record<string, TemplateGlobal>;
}): TemplateAction_2<
  {
    url: string;
    targetPath?: string | undefined;
    values: any;
    templateFileExtension?: string | boolean | undefined;
    copyWithoutRender?: string[] | undefined;
    copyWithoutTemplating?: string[] | undefined;
    cookiecutterCompat?: boolean | undefined;
    replace?: boolean | undefined;
  },
  JsonObject
>;

// @public
export const createFilesystemDeleteAction: () => TemplateAction_2<
  {
    files: string[];
  },
  JsonObject
>;

// @public
export const createFilesystemRenameAction: () => TemplateAction_2<
  {
    files: Array<{
      from: string;
      to: string;
      overwrite?: boolean;
    }>;
  },
  JsonObject
>;

// @public
export function createGithubActionsDispatchAction(options: {
  integrations: ScmIntegrations;
  githubCredentialsProvider?: GithubCredentialsProvider;
}): TemplateAction_2<
  {
    repoUrl: string;
    workflowId: string;
    branchOrTagName: string;
    workflowInputs?:
      | {
          [key: string]: string;
        }
      | undefined;
    token?: string | undefined;
  },
  JsonObject
>;

// @public
export function createGithubDeployKeyAction(options: {
  integrations: ScmIntegrationRegistry;
}): TemplateAction_2<
  {
    repoUrl: string;
    publicKey: string;
    privateKey: string;
    deployKeyName: string;
    privateKeySecretName?: string | undefined;
    token?: string | undefined;
  },
  JsonObject
>;

// @public
export function createGithubEnvironmentAction(options: {
  integrations: ScmIntegrationRegistry;
}): TemplateAction_2<
  {
    repoUrl: string;
    name: string;
    deploymentBranchPolicy?:
      | {
          protected_branches: boolean;
          custom_branch_policies: boolean;
        }
      | undefined;
    customBranchPolicyNames?: string[] | undefined;
    environmentVariables?:
      | {
          [key: string]: string;
        }
      | undefined;
    secrets?:
      | {
          [key: string]: string;
        }
      | undefined;
    token?: string | undefined;
  },
  JsonObject
>;

// @public
export function createGithubIssuesLabelAction(options: {
  integrations: ScmIntegrationRegistry;
  githubCredentialsProvider?: GithubCredentialsProvider;
}): TemplateAction_2<
  {
    repoUrl: string;
    number: number;
    labels: string[];
    token?: string | undefined;
  },
  JsonObject
>;

// @public
export interface CreateGithubPullRequestActionOptions {
  clientFactory?: (
    input: CreateGithubPullRequestClientFactoryInput,
  ) => Promise<OctokitWithPullRequestPluginClient>;
  githubCredentialsProvider?: GithubCredentialsProvider;
  integrations: ScmIntegrationRegistry;
}

// @public
export type CreateGithubPullRequestClientFactoryInput = {
  integrations: ScmIntegrationRegistry;
  githubCredentialsProvider?: GithubCredentialsProvider;
  host: string;
  owner: string;
  repo: string;
  token?: string;
};

// @public
export function createGithubRepoCreateAction(options: {
  integrations: ScmIntegrationRegistry;
  githubCredentialsProvider?: GithubCredentialsProvider;
}): TemplateAction_2<
  {
    repoUrl: string;
    description?: string | undefined;
    homepage?: string | undefined;
    access?: string | undefined;
    deleteBranchOnMerge?: boolean | undefined;
    gitAuthorName?: string | undefined;
    gitAuthorEmail?: string | undefined;
    allowRebaseMerge?: boolean | undefined;
    allowSquashMerge?: boolean | undefined;
    squashMergeCommitTitle?: 'PR_TITLE' | 'COMMIT_OR_PR_TITLE' | undefined;
    squashMergeCommitMessage?:
      | 'PR_BODY'
      | 'COMMIT_MESSAGES'
      | 'BLANK'
      | undefined;
    allowMergeCommit?: boolean | undefined;
    allowAutoMerge?: boolean | undefined;
    requireCodeOwnerReviews?: boolean | undefined;
    bypassPullRequestAllowances?:
      | {
          users?: string[] | undefined;
          teams?: string[] | undefined;
          apps?: string[] | undefined;
        }
      | undefined;
    requiredApprovingReviewCount?: number | undefined;
    restrictions?:
      | {
          users: string[];
          teams: string[];
          apps?: string[] | undefined;
        }
      | undefined;
    requiredStatusCheckContexts?: string[] | undefined;
    requireBranchesToBeUpToDate?: boolean | undefined;
    requiredConversationResolution?: boolean | undefined;
    repoVisibility?: 'internal' | 'private' | 'public' | undefined;
    collaborators?:
      | (
          | {
              user: string;
              access: string;
            }
          | {
              team: string;
              access: string;
            }
          | {
              username: string;
              access: 'pull' | 'push' | 'admin' | 'maintain' | 'triage';
            }
        )[]
      | undefined;
    hasProjects?: boolean | undefined;
    hasWiki?: boolean | undefined;
    hasIssues?: boolean | undefined;
    token?: string | undefined;
    topics?: string[] | undefined;
    repoVariables?:
      | {
          [key: string]: string;
        }
      | undefined;
    secrets?:
      | {
          [key: string]: string;
        }
      | undefined;
    requireCommitSigning?: boolean | undefined;
  },
  JsonObject
>;

// @public
export function createGithubRepoPushAction(options: {
  integrations: ScmIntegrationRegistry;
  config: Config;
  githubCredentialsProvider?: GithubCredentialsProvider;
}): TemplateAction_2<
  {
    repoUrl: string;
    description?: string | undefined;
    defaultBranch?: string | undefined;
    protectDefaultBranch?: boolean | undefined;
    protectEnforceAdmins?: boolean | undefined;
    gitCommitMessage?: string | undefined;
    gitAuthorName?: string | undefined;
    gitAuthorEmail?: string | undefined;
    requireCodeOwnerReviews?: boolean | undefined;
    dismissStaleReviews?: boolean | undefined;
    bypassPullRequestAllowances?:
      | {
          users?: string[];
          teams?: string[];
          apps?: string[];
        }
      | undefined;
    requiredApprovingReviewCount?: number | undefined;
    restrictions?:
      | {
          users: string[];
          teams: string[];
          apps?: string[];
        }
      | undefined;
    requiredStatusCheckContexts?: string[] | undefined;
    requireBranchesToBeUpToDate?: boolean | undefined;
    requiredConversationResolution?: boolean | undefined;
    sourcePath?: string | undefined;
    token?: string | undefined;
    requiredCommitSigning?: boolean | undefined;
  },
  JsonObject
>;

// @public
export function createGithubWebhookAction(options: {
  integrations: ScmIntegrationRegistry;
  defaultWebhookSecret?: string;
  githubCredentialsProvider?: GithubCredentialsProvider;
}): TemplateAction_2<
  {
    repoUrl: string;
    webhookUrl: string;
    webhookSecret?: string | undefined;
    events?: string[] | undefined;
    active?: boolean | undefined;
    contentType?: 'form' | 'json' | undefined;
    insecureSsl?: boolean | undefined;
    token?: string | undefined;
  },
  JsonObject
>;

// @public
export function createPublishAzureAction(options: {
  integrations: ScmIntegrationRegistry;
  config: Config;
}): TemplateAction_2<
  {
    repoUrl: string;
    description?: string | undefined;
    defaultBranch?: string | undefined;
    sourcePath?: string | undefined;
    token?: string | undefined;
    gitCommitMessage?: string | undefined;
    gitAuthorName?: string | undefined;
    gitAuthorEmail?: string | undefined;
  },
  JsonObject
>;

// @public @deprecated
export function createPublishBitbucketAction(options: {
  integrations: ScmIntegrationRegistry;
  config: Config;
}): TemplateAction_2<
  {
    repoUrl: string;
    description?: string | undefined;
    defaultBranch?: string | undefined;
    repoVisibility?: 'private' | 'public' | undefined;
    sourcePath?: string | undefined;
    enableLFS?: boolean | undefined;
    token?: string | undefined;
    gitCommitMessage?: string | undefined;
    gitAuthorName?: string | undefined;
    gitAuthorEmail?: string | undefined;
  },
  JsonObject
>;

// @public
export function createPublishBitbucketCloudAction(options: {
  integrations: ScmIntegrationRegistry;
  config: Config;
}): TemplateAction_2<
  {
    repoUrl: string;
    description?: string | undefined;
    defaultBranch?: string | undefined;
    repoVisibility?: 'private' | 'public' | undefined;
    sourcePath?: string | undefined;
    token?: string | undefined;
  },
  JsonObject
>;

// @public
export function createPublishBitbucketServerAction(options: {
  integrations: ScmIntegrationRegistry;
  config: Config;
}): TemplateAction_2<
  {
    repoUrl: string;
    description?: string | undefined;
    defaultBranch?: string | undefined;
    repoVisibility?: 'private' | 'public' | undefined;
    sourcePath?: string | undefined;
    enableLFS?: boolean | undefined;
    token?: string | undefined;
    gitCommitMessage?: string | undefined;
    gitAuthorName?: string | undefined;
    gitAuthorEmail?: string | undefined;
  },
  JsonObject
>;

// @public
export function createPublishBitbucketServerPullRequestAction(options: {
  integrations: ScmIntegrationRegistry;
  config: Config;
}): TemplateAction_2<
  {
    repoUrl: string;
    title: string;
    description?: string | undefined;
    targetBranch?: string | undefined;
    sourceBranch: string;
    token?: string | undefined;
  },
  JsonObject
>;

// @public
export function createPublishGerritAction(options: {
  integrations: ScmIntegrationRegistry;
  config: Config;
}): TemplateAction_2<
  {
    repoUrl: string;
    description: string;
    defaultBranch?: string | undefined;
    gitCommitMessage?: string | undefined;
    gitAuthorName?: string | undefined;
    gitAuthorEmail?: string | undefined;
    sourcePath?: string | undefined;
  },
  JsonObject
>;

// @public
export function createPublishGerritReviewAction(options: {
  integrations: ScmIntegrationRegistry;
  config: Config;
}): TemplateAction_2<
  {
    repoUrl: string;
    branch?: string | undefined;
    sourcePath?: string | undefined;
    gitCommitMessage?: string | undefined;
    gitAuthorName?: string | undefined;
    gitAuthorEmail?: string | undefined;
  },
  JsonObject
>;

// @public
export function createPublishGithubAction(options: {
  integrations: ScmIntegrationRegistry;
  config: Config;
  githubCredentialsProvider?: GithubCredentialsProvider;
}): TemplateAction_2<
  {
    repoUrl: string;
    description?: string | undefined;
    homepage?: string | undefined;
    access?: string | undefined;
    defaultBranch?: string | undefined;
    protectDefaultBranch?: boolean | undefined;
    protectEnforceAdmins?: boolean | undefined;
    deleteBranchOnMerge?: boolean | undefined;
    gitCommitMessage?: string | undefined;
    gitAuthorName?: string | undefined;
    gitAuthorEmail?: string | undefined;
    allowRebaseMerge?: boolean | undefined;
    allowSquashMerge?: boolean | undefined;
    squashMergeCommitTitle?: 'PR_TITLE' | 'COMMIT_OR_PR_TITLE' | undefined;
    squashMergeCommitMessage?:
      | 'PR_BODY'
      | 'COMMIT_MESSAGES'
      | 'BLANK'
      | undefined;
    allowMergeCommit?: boolean | undefined;
    allowAutoMerge?: boolean | undefined;
    sourcePath?: string | undefined;
    bypassPullRequestAllowances?:
      | {
          users?: string[];
          teams?: string[];
          apps?: string[];
        }
      | undefined;
    requiredApprovingReviewCount?: number | undefined;
    restrictions?:
      | {
          users: string[];
          teams: string[];
          apps?: string[];
        }
      | undefined;
    requireCodeOwnerReviews?: boolean | undefined;
    dismissStaleReviews?: boolean | undefined;
    requiredStatusCheckContexts?: string[] | undefined;
    requireBranchesToBeUpToDate?: boolean | undefined;
    requiredConversationResolution?: boolean | undefined;
    repoVisibility?: 'internal' | 'private' | 'public' | undefined;
    collaborators?:
      | (
          | {
              user: string;
              access: string;
            }
          | {
              team: string;
              access: string;
            }
          | {
              username: string;
              access: 'pull' | 'push' | 'admin' | 'maintain' | 'triage';
            }
        )[]
      | undefined;
    hasProjects?: boolean | undefined;
    hasWiki?: boolean | undefined;
    hasIssues?: boolean | undefined;
    token?: string | undefined;
    topics?: string[] | undefined;
    repoVariables?:
      | {
          [key: string]: string;
        }
      | undefined;
    secrets?:
      | {
          [key: string]: string;
        }
      | undefined;
    requiredCommitSigning?: boolean | undefined;
  },
  JsonObject
>;

// @public
export const createPublishGithubPullRequestAction: (
  options: CreateGithubPullRequestActionOptions,
) => TemplateAction_2<
  {
    title: string;
    branchName: string;
    targetBranchName?: string | undefined;
    description: string;
    repoUrl: string;
    draft?: boolean | undefined;
    targetPath?: string | undefined;
    sourcePath?: string | undefined;
    token?: string | undefined;
    reviewers?: string[] | undefined;
    teamReviewers?: string[] | undefined;
    commitMessage?: string | undefined;
  },
  JsonObject
>;

// @public
export function createPublishGitlabAction(options: {
  integrations: ScmIntegrationRegistry;
  config: Config;
}): TemplateAction_2<
  {
    repoUrl: string;
    defaultBranch?: string | undefined;
    repoVisibility?: 'internal' | 'private' | 'public' | undefined;
    sourcePath?: string | undefined;
    token?: string | undefined;
    gitCommitMessage?: string | undefined;
    gitAuthorName?: string | undefined;
    gitAuthorEmail?: string | undefined;
    setUserAsOwner?: boolean | undefined;
    topics?: string[] | undefined;
    settings?:
      | {
          path?: string | undefined;
          auto_devops_enabled?: boolean | undefined;
          ci_config_path?: string | undefined;
          description?: string | undefined;
          topics?: string[] | undefined;
          visibility?: 'internal' | 'private' | 'public' | undefined;
        }
      | undefined;
    branches?:
      | {
          name: string;
          protect?: boolean | undefined;
          create?: boolean | undefined;
          ref?: string | undefined;
        }[]
      | undefined;
    projectVariables?:
      | {
          key: string;
          value: string;
          description?: string | undefined;
          variable_type?: string | undefined;
          protected?: boolean | undefined;
          masked?: boolean | undefined;
          raw?: boolean | undefined;
          environment_scope?: string | undefined;
        }[]
      | undefined;
  },
  JsonObject
>;

// @public
export const createPublishGitlabMergeRequestAction: (options: {
  integrations: ScmIntegrationRegistry;
}) => TemplateAction_2<
  {
    repoUrl: string;
    title: string;
    description: string;
    branchName: string;
    targetBranchName?: string | undefined;
    sourcePath?: string | undefined;
    targetPath?: string | undefined;
    token?: string | undefined;
    commitAction?: 'update' | 'delete' | 'create' | undefined;
    projectid?: string | undefined;
    removeSourceBranch?: boolean | undefined;
    assignee?: string | undefined;
  },
  JsonObject
>;

// @public
export function createRouter(options: RouterOptions): Promise<express.Router>;

// @public @deprecated (undocumented)
export const createTemplateAction: <
  TInputParams extends JsonObject = JsonObject,
  TOutputParams extends JsonObject = JsonObject,
  TInputSchema extends ZodType<any, ZodTypeDef, any> | Schema = {},
  TOutputSchema extends ZodType<any, ZodTypeDef, any> | Schema = {},
  TActionInput extends JsonObject = TInputSchema extends ZodType<
    any,
    any,
    infer IReturn
  >
    ? IReturn
    : TInputParams,
  TActionOutput extends JsonObject = TOutputSchema extends ZodType<
    any,
    any,
    infer IReturn_1
  >
    ? IReturn_1
    : TOutputParams,
>(
  action: TemplateActionOptions<
    TActionInput,
    TActionOutput,
    TInputSchema,
    TOutputSchema
  >,
) => TemplateAction_2<TActionInput, TActionOutput>;

// @public
export function createWaitAction(options?: {
  maxWaitTime?: Duration | HumanDuration;
}): TemplateAction_2<HumanDuration, JsonObject>;

// @public
export type CreateWorkerOptions = {
  taskBroker: TaskBroker;
  actionRegistry: TemplateActionRegistry;
  integrations: ScmIntegrations;
  workingDirectory: string;
  logger: Logger;
  additionalTemplateFilters?: Record<string, TemplateFilter>;
  concurrentTasksLimit?: number;
  additionalTemplateGlobals?: Record<string, TemplateGlobal>;
  permissions?: PermissionEvaluator;
};

// @public
export interface CurrentClaimedTask {
  createdBy?: string;
  secrets?: TaskSecrets_2;
  spec: TaskSpec;
  taskId: string;
}

// @public
export class DatabaseTaskStore implements TaskStore {
  // (undocumented)
  cancelTask(
    options: TaskStoreEmitOptions<
      {
        message: string;
      } & JsonObject
    >,
  ): Promise<void>;
  // (undocumented)
  claimTask(): Promise<SerializedTask | undefined>;
  // (undocumented)
  completeTask(options: {
    taskId: string;
    status: TaskStatus;
    eventBody: JsonObject;
  }): Promise<void>;
  // (undocumented)
  static create(options: DatabaseTaskStoreOptions): Promise<DatabaseTaskStore>;
  // (undocumented)
  createTask(
    options: TaskStoreCreateTaskOptions,
  ): Promise<TaskStoreCreateTaskResult>;
  // (undocumented)
  emitLogEvent(
    options: TaskStoreEmitOptions<
      {
        message: string;
      } & JsonObject
    >,
  ): Promise<void>;
  // (undocumented)
  getTask(taskId: string): Promise<SerializedTask>;
  // (undocumented)
  heartbeatTask(taskId: string): Promise<void>;
  // (undocumented)
  list(options: { createdBy?: string }): Promise<{
    tasks: SerializedTask[];
  }>;
  // (undocumented)
  listEvents(options: TaskStoreListEventsOptions): Promise<{
    events: SerializedTaskEvent[];
  }>;
  // (undocumented)
  listStaleTasks(options: { timeoutS: number }): Promise<{
    tasks: {
      taskId: string;
    }[];
  }>;
  // (undocumented)
  shutdownTask(options: TaskStoreShutDownTaskOptions): Promise<void>;
}

// @public
export type DatabaseTaskStoreOptions = {
  database: PluginDatabaseManager | Knex;
};

// @public @deprecated
export const executeShellCommand: typeof executeShellCommand_2;

// @public @deprecated
export const fetchContents: typeof fetchContents_2;

// @public (undocumented)
export type OctokitWithPullRequestPluginClient = Octokit & {
  createPullRequest(options: createPullRequest.Options): Promise<{
    data: {
      html_url: string;
      number: number;
      base: {
        ref: string;
      };
    };
  } | null>;
};

// @public
export interface RouterOptions {
  // (undocumented)
  actions?: TemplateAction_2<any, any>[];
  // (undocumented)
  additionalTemplateFilters?: Record<string, TemplateFilter>;
  // (undocumented)
  additionalTemplateGlobals?: Record<string, TemplateGlobal>;
  // (undocumented)
  catalogClient: CatalogApi;
  concurrentTasksLimit?: number;
  // (undocumented)
  config: Config;
  // (undocumented)
  database: PluginDatabaseManager;
  // (undocumented)
  identity?: IdentityApi;
  // (undocumented)
  logger: Logger;
  // (undocumented)
  permissionRules?: Array<
    TemplatePermissionRuleInput | ActionPermissionRuleInput
  >;
  // (undocumented)
  permissions?: PermissionEvaluator;
  // (undocumented)
  reader: UrlReader;
  // (undocumented)
  scheduler?: PluginTaskScheduler;
  // (undocumented)
  taskBroker?: TaskBroker;
  // @deprecated (undocumented)
  taskWorkers?: number;
}

// @public @deprecated
export type RunCommandOptions = ExecuteShellCommandOptions;

// @public @deprecated
export const ScaffolderEntitiesProcessor: typeof ScaffolderEntitiesProcessor_2;

// @public @deprecated
export type SerializedTask = SerializedTask_2;

// @public @deprecated
export type SerializedTaskEvent = SerializedTaskEvent_2;

// @public @deprecated
export type TaskBroker = TaskBroker_2;

// @public @deprecated
export type TaskBrokerDispatchOptions = TaskBrokerDispatchOptions_2;

// @public @deprecated
export type TaskBrokerDispatchResult = TaskBrokerDispatchResult_2;

// @public @deprecated
export type TaskCompletionState = TaskCompletionState_2;

// @public @deprecated
export type TaskContext = TaskContext_2;

// @public @deprecated
export type TaskEventType = TaskEventType_2;

// @public
export class TaskManager implements TaskContext {
  // (undocumented)
  get cancelSignal(): AbortSignal;
  // (undocumented)
  complete(result: TaskCompletionState, metadata?: JsonObject): Promise<void>;
  // (undocumented)
  static create(
    task: CurrentClaimedTask,
    storage: TaskStore,
    abortSignal: AbortSignal,
    logger: Logger,
  ): TaskManager;
  // (undocumented)
  get createdBy(): string | undefined;
  // (undocumented)
  get done(): boolean;
  // (undocumented)
  emitLog(message: string, logMetadata?: JsonObject): Promise<void>;
  // (undocumented)
  getWorkspaceName(): Promise<string>;
  // (undocumented)
  get secrets(): TaskSecrets_2 | undefined;
  // (undocumented)
  get spec(): TaskSpecV1beta3;
}

// @public @deprecated (undocumented)
export type TaskSecrets = TaskSecrets_2;

// @public @deprecated
export type TaskStatus = TaskStatus_2;

// @public
export interface TaskStore {
  // (undocumented)
  cancelTask?(options: TaskStoreEmitOptions): Promise<void>;
  // (undocumented)
  claimTask(): Promise<SerializedTask | undefined>;
  // (undocumented)
  completeTask(options: {
    taskId: string;
    status: TaskStatus;
    eventBody: JsonObject;
  }): Promise<void>;
  // (undocumented)
  createTask(
    options: TaskStoreCreateTaskOptions,
  ): Promise<TaskStoreCreateTaskResult>;
  // (undocumented)
  emitLogEvent(options: TaskStoreEmitOptions): Promise<void>;
  // (undocumented)
  getTask(taskId: string): Promise<SerializedTask>;
  // (undocumented)
  heartbeatTask(taskId: string): Promise<void>;
  // (undocumented)
  list?(options: { createdBy?: string }): Promise<{
    tasks: SerializedTask[];
  }>;
  // (undocumented)
  listEvents(options: TaskStoreListEventsOptions): Promise<{
    events: SerializedTaskEvent[];
  }>;
  // (undocumented)
  listStaleTasks(options: { timeoutS: number }): Promise<{
    tasks: {
      taskId: string;
    }[];
  }>;
  // (undocumented)
  shutdownTask?(options: TaskStoreShutDownTaskOptions): Promise<void>;
}

// @public
export type TaskStoreCreateTaskOptions = {
  spec: TaskSpec;
  createdBy?: string;
  secrets?: TaskSecrets_2;
};

// @public
export type TaskStoreCreateTaskResult = {
  taskId: string;
};

// @public
export type TaskStoreEmitOptions<TBody = JsonObject> = {
  taskId: string;
  body: TBody;
};

// @public
export type TaskStoreListEventsOptions = {
  taskId: string;
  after?: number | undefined;
};

// @public
export type TaskStoreShutDownTaskOptions = {
  taskId: string;
};

// @public
export class TaskWorker {
  // (undocumented)
  static create(options: CreateWorkerOptions): Promise<TaskWorker>;
  // (undocumented)
  protected onReadyToClaimTask(): Promise<void>;
  // (undocumented)
  runOneTask(task: TaskContext): Promise<void>;
  // (undocumented)
  start(): void;
}

// @public @deprecated (undocumented)
export type TemplateAction<TInput extends JsonObject> =
  TemplateAction_2<TInput>;

// @public
export class TemplateActionRegistry {
  // (undocumented)
  get(actionId: string): TemplateAction_2;
  // (undocumented)
  list(): TemplateAction_2[];
  // (undocumented)
  register(action: TemplateAction_2): void;
}

// @public @deprecated (undocumented)
export type TemplateFilter = TemplateFilter_2;

// @public @deprecated (undocumented)
export type TemplateGlobal = TemplateGlobal_2;

// @public (undocumented)
export type TemplatePermissionRuleInput<
  TParams extends PermissionRuleParams = PermissionRuleParams,
> = PermissionRule<
  TemplateEntityStepV1beta3 | TemplateParametersV1beta3,
  {},
  typeof RESOURCE_TYPE_SCAFFOLDER_TEMPLATE,
  TParams
>;
```
