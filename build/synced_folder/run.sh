cd $ROOT_DIR

npm install

grunt || echo "so the tests failed.."


grunt cleanXunitFile

grunt s3

