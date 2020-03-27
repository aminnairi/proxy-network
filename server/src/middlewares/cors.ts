"use strict";

import { Request, Response } from "express";

export default function cors(request: Request, response: Response, next: any) {
    const { origin } = request.headers;

    if (typeof origin !== "string") {
        return next();
    }

    const origins = [
        "http://404placevendome.com",
        "http://404placevendome.local"
    ];

    if (!origins.includes(origin)) {
        return next();
    }

    response.header("Access-Control-Allow-Origin", origin);

    return next();
};
