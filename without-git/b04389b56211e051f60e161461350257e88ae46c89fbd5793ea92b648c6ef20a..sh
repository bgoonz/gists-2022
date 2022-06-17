#Quick clean up
sudo apt-get autoremove
sudo du -sh /var/cache/apt #clean apt cache
sudo apt-get autoclean
sudo apt-get clean
journalctl --disk-usage
du -h /var/lib/snapd/snaps #remove old versions of snap
rm -rf ~/.cache/thumbnails/* #clean thumbnail cache