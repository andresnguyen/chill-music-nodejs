import path from 'path'
import rfs from 'rotating-file-stream'

export const accessLogStream = rfs('access.log', {
    interval: '1d',
    path: path.resolve(__dirname, '..', '..', 'log')
})
