FROM node

COPY  . /

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org &&  \ 
    cnpm i  

ENTRYPOINT ["node","app.js"]

EXPOSE 3000



