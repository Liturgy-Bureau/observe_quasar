#!/bin/bash
echo "starting servers..."
gnome-terminal --tab --title="UI" \
               -- /bin/bash -c "cd 0web-interface-angular;ng serve"
echo "User Interface started at port 4200"               
gnome-terminal --tab --title="Auth Server" \
               -- /bin/bash -c "cd 1auth_http_server;nodemon run"
echo "Authorization Server started at port 3000"               
gnome-terminal --tab --title="Users Server" \
               -- /bin/bash -c "cd 2user_socket_server;nodemon run"
echo "Users-Members Server started at port 3001"               
gnome-terminal --tab --title="Dashboard Server" \
               -- /bin/bash -c "cd 3dashboard_socket_server;nodemon run"
echo "Dashboard Server started at port 3002"               
gnome-terminal --tab --title="Chat/Forum Server" \
               -- /bin/bash -c "cd 4chatf_socket_server;nodemon run"
echo "Chat and Forum started at port 3003"               
gnome-terminal --tab --title="Pandora Server" \
               -- /bin/bash -c "cd 5pandora_AI_tensor_server;read"
echo "Pandora AI started at port 3004 - but not used"               
gnome-terminal --tab --title="Financial Server" \
               -- /bin/bash -c "cd 6pay_http_server;nodemon run"
echo "Financial Server started at port 3005"               
gnome-terminal --tab --title="Object Server" \
               -- /bin/bash -c "cd 7object_socket_server;nodemon run"                                                                                                           
echo "Object Server started at port 3006"               
read
