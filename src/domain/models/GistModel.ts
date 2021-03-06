import { UserModel } from "./UserModel";

export type GistModel = {
  url?: string,
  forks_url?: string,
  commits_url?: string,
  id?: string,
  node_id?: string,
  git_pull_url?: string,
  git_push_url?: string,
  html_url?: string,
  files?: any,
  public?: boolean,
  created_at?: string,
  updated_at?: string,
  description?: string,
  comments?: number,
  user?: string,
  comments_url?: string,
  owner?: UserModel,
  truncated?: boolean
}