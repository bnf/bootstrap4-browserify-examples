MODULES=babel-patched babel full shimmed

.PHONY: all $(MODULES)

all: $(MODULES)

$(MODULES):
	$(MAKE) -C $@

clean:
	find . -mindepth 2 -maxdepth 2 -name 'bundle.js' -type f -exec rm -f '{}' +
	find . -mindepth 2 -maxdepth 2 -name 'node_modules' -type d -exec rm -rf '{}' +
