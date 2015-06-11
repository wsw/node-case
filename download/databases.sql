create table detail(
    id int primary key auto_increment,
    list varchar(30) not null,
    category varchar(30) not null,
    link varchar(300) not null
);

insert into detail values
(1, 'tv', 'vod', 'http://app.shafa.com/api/push/download/54aa40ff726e09a651b0432c?response-content-type=application%2fvnd.android.package-archive');

insert into detail values
(2, 'tv', 'travel_and_local', 'http://app.shafa.com/api/push/download/551cc89675de4c4e46d9d108?response-content-type=application%2fvnd.android.package-archive')
