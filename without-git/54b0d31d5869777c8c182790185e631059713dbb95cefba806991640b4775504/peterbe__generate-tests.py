import re
import json
from pathlib import Path

root = Path('tests/generated-tests')
if not root.exists():
    root.mkdir()
for file in root.glob('*.js'):
    file.unlink()

N = 20


for i in range(N):
    code = '''
import { fileURLToPath } from 'url'
import path from 'path'
import cheerio from 'cheerio'
import { describe, expect, jest } from '@jest/globals'

//import nock from 'nock'

//import patterns from '../../lib/patterns.js'
//import getApplicableVersions from '../../lib/get-applicable-versions.js'
//import { allVersions } from '../../lib/all-versions.js'
//import versionSatisfiesRange from '../../lib/version-satisfies-range.js'
//import checkIfNextVersionOnly from '../../lib/check-if-next-version-only.js'
//import dataDirectory from '../../lib/data-directory.js'
//import encodeBracketedParentheses from '../../lib/encode-bracketed-parentheses.js'
//import generateRedirectsForPermalinks from '../../lib/redirects/permalinks.js'
//import getTocItems from '../../lib/get-toc-items.js'
//import pathUtils from '../../lib/path-utils.js'
//import Permalink from '../../lib/permalink.js'
//import languages from '../../lib/languages.js'
//import renderContent from '../../lib/render-content/index.js'
//import processLearningTracks from '../../lib/process-learning-tracks.js'
//import { productMap } from '../../lib/all-products.js'
//import readFileContents from '../../lib/read-file-contents.js'
//import getLinkData from '../../lib/get-link-data.js'
//import getDocumentType from '../../lib/get-document-type.js'

import supertest from 'supertest'
import createApp from '../../lib/app.js'

import Page from '../../lib/page.js'
import { allVersions } from '../../lib/all-versions.js'
import enterpriseServerReleases, { latest } from '../../lib/enterprise-server-releases.js'
import nonEnterpriseDefaultVersion from '../../lib/non-enterprise-default-version.js'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
//const prerenderedObjects = readJsonFile('./lib/graphql/static/prerendered-objects.json')
//const enterpriseServerVersions = Object.keys(allVersions).filter((v) =>
//  v.startsWith('enterprise-server@')
//)

// get the `free-pro-team` segment of `free-pro-team@latest`
const nonEnterpriseDefaultPlan = nonEnterpriseDefaultVersion.split('@')[0]

const opts = {
  relativePath:
    'pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches.md',
  basePath: path.join(__dirname, '../../content'),
  languageCode: 'en',
}

const app = createApp()

const requester = supertest(app)
const request = (method, route) => requester[method](route)

describe('description %(i)s', () => {
    jest.setTimeout(10 * 1000)
    test('test %(i)s', async() => {
        const res = await request('get', '/healthz')
        expect(res.status).toBe(200)
        expect(%(i)s).toBe(%(i)s)
    })
})
    ''' % dict(
        i=i,

    )
    with open(root / f'test-{i}.js', 'w') as f:
        f.write(code.strip())
        f.write('\n')
    # print(code)
