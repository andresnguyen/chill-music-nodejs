import { failedResponse } from '../constants/response.constant'

export const handleError = (err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500).json({
        ...failedResponse,
        error: err.message
    })
}
