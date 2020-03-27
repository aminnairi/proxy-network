.PHONY: start stop restart

start:
	make --directory client start
	make --directory server start
	make --directory nginx start

stop:
	make --directory nginx stop
	make --directory client stop
	make --directory server stop

restart: stop start
