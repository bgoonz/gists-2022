# Links
https://help.ubuntu.com/community/Applications

**Example Scripts**

* https://github.com/Mins/TuxLite
* https://github.com/snwh/ubuntu-post-install
* [Ubuntu 12.04 LTS Post Installation Script](http://debianhelp.wordpress.com/2012/06/11/ubuntu-12-04-lts-post-installation-script/)
[Ubuntu post-installation script](http://nicolargo.github.io/ubuntupostinstall/)
* http://howto.blbosti.com/2010/02/simple-ubuntu-install-script/

**Articles**  
* [To Do List After installing Ubuntu 14.04 LTS Trusty Tahr OS](http://debianhelp.wordpress.com/2013/11/27/to-do-list-after-installing-ubuntu-14-04-trusty-tahr-os/)
* [How to secure an Ubuntu 12.04 LTS server - Part 1 The Basics](http://www.thefanclub.co.za/how-to/how-secure-ubuntu-1204-lts-server-part-1-basics)
* [How to secure an Ubuntu 12.04 LTS server - Part 2 The GUI installer script](http://www.thefanclub.co.za/node/52)

**Development**  
* https://help.ubuntu.com/community/ApacheMySQLPHP
* https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu
* [How To Set Up Apache Virtual Hosts on Ubuntu 14.04 LTS](https://www.digitalocean.com/community/tutorials/how-to-set-up-apache-virtual-hosts-on-ubuntu-14-04-lts)



# Items
* Common software  
* Security software  
* Development software  
* Ubuntu configuration  

# Ubuntu
Gnome Session “Flashback”
```
sudo apt-get install gnome-session-flashback
sudo apt-get install compizconfig-settings-manager
sudo apt-get install indicator-applet-appmenu sudo apt-get install gnome-tweak-tool
```
Cairo-Dock
```
sudo add-apt-repository ppa:cairo-dock-team/ppa
sudo apt-get update
sudo apt-get install cairo-dock cairo-dock-plug-ins
```

Unity Tweak Tool
```
sudo add-apt-repository ppa:freyja-dev/unity-tweak-tool-daily
sudo apt-get update
sudo apt-get install unity-tweak-tool
```


Synaptic Package Manager 
```
sudo apt-get install synaptic
```

Video Drivers and Proprietary Drivers Check
```
# check to make sure your video driver were completely installed
/usr/lib/nux/unity_support_test -p
```



# Common Software

Archiver/ Packing software 
```bash
sudo apt-get install unace rar unrar p7zip-rar p7zip zip 
unzip sharutils uudeview mpack arj cabextract file-roller
```
Auto Mount Windows NTFS Partition in Ubuntu 14.04
```bash
sudo apt-get install ntfs-config
sudo mkdir -p /etc/hal/fdi/policy
```
launch ntfs-config from the Unity Dash Home. Click Advanced Configuration and check the partitions you want to auto-mount at start-up.


## Browsers
### Google Chrome
Stable
```bash
wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
sudo sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
sudo apt-get update
sudo apt-get install google-chrome-stable
```
Beta
```bash
sudo apt-get install google-chrome-beta
```

## LibreOffice
To install LibreOffice (and check for extra features):
```bash
sudo add-apt-repository ppa:libreoffice/libreoffice-4-2
sudo apt-get update sudo apt-get -y dist-upgrade sudo apt-get install libreoffice libreoffice-java-common libreoffice-math libreoffice-gnome libreoffice-java-common
```
To enable PDF import capability:
```
sudo apt-get install libreoffice-pdfimport
```
See: [How to install Grammar checking Plug-in for LibreOffice Writer](http://debianhelp.wordpress.com/2011/10/25/how-to-install-grammar-checker-in-libreoffice-in-ubuntu)

## FileZilla
```bash
sudo apt-get install filezilla filezilla-common
```

## Gimp
```bash
sudo add-apt-repository ppa:otto-kesselgulasch/gimp
sudo apt-get update
sudo apt-get install gimp gimp-data gimp-data-extras
```

## Shotwell
```bash
sudo apt-get install shotwell
```

## Oracle VM VirtualBox
```bash
sudo sh -c 'echo "deb http://download.virtualbox.org/virtualbox/debian $(lsb_release -sc)  contrib" >> /etc/apt/sources.list'
sudo sh -c 'echo "deb http://download.virtualbox.org/virtualbox/debian $(lsb_release -sc)  contrib" >> /etc/apt/sources.list'
wget -q http://download.virtualbox.org/virtualbox/debian/oracle_vbox.asc -O- | sudo apt-key add -
sudo apt-get update 
sudo apt-get install virtualbox-4.3
```


## BleachBit
```bash
sudo apt-get install bleachbit
sudo bleachbit
```

```bash

```

```bash

```

```bash

```


# Security
```bash
# rkhunter (Rootkit Hunter)
sudo apt-get install rkhunter chkrootkit

# ClamAV
sudo apt-get install clamav clamtk
```

# Multimedia

```bash
# VLC Player
sudo add-apt-repository ppa:n-muench/vlc
sudo apt-get update
sudo apt-get install vlc mplayer
```


# Java
Openjdk 7 Update and Sun Java 7 JDK option 
```bash
sudo apt-get install openjdk-7-jdk openjdk-7-jre icedtea-7-plugin
sudo update-alternatives --config java
# then select /usr/lib/jvm/java-7-openjdk from the selection list and press enter.
```

Proprietary Sun Java 7 JDK 
```bash
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java7-installer

```
Testing
```bash
java -version
# go to 
http://javatester.org/version.html
```

# Misc

Essential tools for compiling from sources 
http://ubuntuforums.org/showthread.php?t=323939  
```
sudo apt-get install build-essential checkinstall cdbs devscripts dh-make fakeroot libxml-parser-perl check
```

Enable hidden Startup Application Manager settings on Ubuntu 14.04 
```bash
sudo sed -i 's/NoDisplay=true/NoDisplay=false/g' /etc/xdg/autostart/*.desktop
```

And you can remove the following applications that you will probably never use (optional):
```bash
sudo apt-get purge oneconf popularity-contest python-ubuntuone-client python-ubuntuone-storageprotocol ubuntuone-installer python-ubuntuone-control-panel rhythmbox-ubuntuone ubuntuone-client ubuntuone-client-gnome ubuntuone-control-panel unity-scope-musicstores deja-dup libfreerdp1 remmina remmina-common vino remmina-plugin-rdp remmina-plugin-vnc activity-log-manager-common python-zeitgeist activity-log-manager-control-center rhythmbox-plugin-zeitgeist unity-lens-video unity-scope-video-remote zeitgeist  zeitgeist-core zeitgeist-datahub rsync

sudo apt-get autoremove
```

## Compiz
```
sudo apt-get install compiz compizconfig-settings-manager compiz-plugins
```