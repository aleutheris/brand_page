#!/usr/bin/env bash

# Run formatting verification before uploading the website to GitHub.
npm run format && npm run format:check
