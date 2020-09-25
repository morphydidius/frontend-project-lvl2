install:
	npm install
publish:
	npm publish --dry-run
make test:
	npx -n --experimental-vm-modules jest --watch
lint:
	npx eslint .
