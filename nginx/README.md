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

Once started, you can access:
- The client at [`404placevendome.local`](http://404placevendome.local).
- The server at [`api.404placevendome.local`](http://api.404placevendome.local).
