Pour lancer la stack :

```
docker network create traefik-net # Network externe
docker-compose -f docker-compose.yml -f api/docker-compose.yml -f gateway/docker-compose.yml -f frontend/docker-compose.yml up -d
```


api : http://api.oldschool.localhost/api
frontend : http://oldschool.localhost (à ignorer)

Dashboard gateway : http://localhost:8080

Grafana : http://grafana.localhost
Prometheus : http://prometheus.localhost

credentials : admin / admin
