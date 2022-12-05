FROM mysql:5.7

WORKDIR /docker-entrypoint-initdb.d/
COPY ./sql/restaurant.sql ./dumb.sql
# RUN mysql -h localhost -P 8080 -u root -p root restaurant < ./dumb.sql
 
