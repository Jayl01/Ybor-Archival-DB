function list_child_processes () {
    local ppid=$1;
    local current_children=$(pgrep -P $ppid);
    local local_child;
    if [ $? -eq 0 ];
    then
        for current_child in $current_children
        do
          local_child=$current_child;
          list_child_processes $local_child;
          echo $local_child;
        done;
    else
      return 0;
    fi;
}

ps 34788;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 34788 > /dev/null;
done;

for child in $(list_child_processes 34789);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/cool/Documents/GitHub/Ybor-Archival-DB/YborArchives.Server/bin/Debug/net9.0/217759087ce84cbb8eb1d21d08eea723.sh;
