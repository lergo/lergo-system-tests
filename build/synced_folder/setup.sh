echo "updating repositories"
sudo apt-get update



( which git && echo "git exists" ) || ( echo "installing git" && sudo apt-get install git -y )

echo "cloning repository"
rm -rf lergo-system-tests || echo "folder does not exist"

echo "actual : cloning repository"
git clone https://github.com/lergo/lergo-system-tests.git

( which npm && echo "npm exists" ) || ( echo "installing npm" && sudo apt-get install npm -y )

( which node && echo "node symbolic link exists" )  || ( echo "creating symbolic link to node" && sudo ln -Tfs /usr/bin/nodejs /usr/bin/node )
( which grunt && echo "grunt exists" ) || ( echo "installing grunt" && sudo npm -g install grunt-cli )
# ( which bower && echo "bower exists" ) || ( echo "install bower" && sudo npm -g install bower )
