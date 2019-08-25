import json from 'rollup-plugin-json';
import ts from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/main.ts',
    output: {
        file: 'dist/main.js',
        format: 'cjs'
    },
    plugins: [
        json(),
        ts({
            alwaysStrict: true,
            sourceMap: true,
            esModuleInterop: true
        }),
        resolve()
    ],
    external: [
        'express'
    ]
}