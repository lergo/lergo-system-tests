set -v
set -e
set -x

echo "starting system-tests build"

chmod 755 /vagrant/*.sh

echo "defining variables"
source /vagrant/variables.sh

echo "setting up"
source /vagrant/setup.sh

echo "running build"
source /vagrant/run.sh


echo "build finished"