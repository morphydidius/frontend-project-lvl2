install:
	npm install
publish:
	npm publish --dry-run
make test:
	npm run test
make test watch:
	npx -n --experimental-vm-modules jest --watch
make lint:
	npx eslint .
