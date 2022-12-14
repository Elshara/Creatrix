import type { Application } from 'express'
import type { ApiHandler } from '../../types'

import getEndpoints from './get'
import deleteEndpoints from './delete'
import postEndpoints from './post'
import patchEndpoints from './patch'

const prependApiPath = (path: string) => `/api${path}`

interface Method {
	method: string
	endpoints: ApiHandler[]
}

const methods: Method[] = [
	{
		method: 'get',
		endpoints: getEndpoints
	},
	{
		method: 'delete',
		endpoints: deleteEndpoints
	},
	{
		method: 'post',
		endpoints: postEndpoints
	},
	{
		method: 'patch',
		endpoints: patchEndpoints
	}
]

export function registerApis(app: Application) {
	methods.forEach(({ method, endpoints }) => {
		endpoints.forEach(endpoint => {
			// @ts-ignore
			app[method](prependApiPath(endpoint.path), endpoint.handler)
		})
	})
}
