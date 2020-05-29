#!/bin/bash  

export SENTRY_AUTH_TOKEN=7c44fb0b77b7430b93cdad42cd8f5ad6386fcc8d7dd6477e86b48c7aa490d793
export SENTRY_ORG=116e23a13af3
export VERSION=v1.0.9



# sentry-cli releases files $VERSION upload-sourcemaps  "./build/static"  --rewrite

# sentry-cli releases finalize $VERSION

 sentry-cli releases new -p nanlan-blog v1.0.9

 sentry-cli releases set-commits --auto v1.0.9

 sentry-cli releases new v1.0.9

 sentry-cli releases finalize v1.0.9