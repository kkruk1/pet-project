bash:
	docker run --rm --network host -v $(shell pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.41.2-jammy /bin/bash

