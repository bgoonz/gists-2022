#go to your home directory and get the golang tarball using curl
cd ~
#change "go1.15.2" to whatever version you want
curl -O https://dl.google.com/go/go1.15.2.linux-amd64.tar.gz

#extract the download using tar
tar xvf go1.15.2.linux-amd64.tar.gz

#move the go install to /usr/local
sudo chown -R root:root ./go
sudo mv go /usr/local

#set up your go paths
sudo nano ~/.profile

#add these at the end of the file
#change "$HOME/go" to wherever you will be doing your projects
export GOPATH=$HOME/go
export PATH=$PATH:/usr/local/go/bin:$GOPATH/bin

#save the file and exit

#apply the changes to your terminal
source ~/.profile

#you're good to Go :)