if [[ ! -d node_modules ]]; then
  echo "ERROR: need to be in root of angular project"
  exit 1
fi
  
rm -rf dist
ng build --prod --aot --base-href file://$PWD/dist/

open dist/index.html

