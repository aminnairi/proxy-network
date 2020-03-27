# nginx

## Requirements

- Docker
- Docker Compose

## Installation

```console
# echo "127.0.0.1 404placevendome.local" >> /etc/hosts
# echo "127.0.0.1 api.404placevendome.local" >> /etc/hosts
```

## Usage

```console
$ make start    # start the services
$ make stop     # stop the services
$ make restart  # alias for make stop start
```
