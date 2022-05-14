// @ts-ignore

import { environment } from "../environments/environment";
import {Observable} from "rxjs";

export const { API: baseURL } = environment;

export const urls
{
    users: `${baseURL}/users`
    posts: `${baseURL}/posts`
    comments: `${baseURL}/comments`
}
