# project 2
To serve on localhost:8888 run bellow command
``` bash
docker run -it --rm -d -p 8888:80 --name web -v\
/path/to/Front:/usr/share/nginx/html nginx
```
For example:
``` bash
docker run -it --rm -d -p 8888:80 --name web -v\
/home/sfmqrb/Desktop/7/WEB/exes/miaAnswers/Web_HW02/Front\
:/usr/share/nginx/html nginx
```