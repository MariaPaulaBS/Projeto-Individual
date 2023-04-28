create database acotar;
use acotar;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar (45),
dtNasc date,
senha char (8))auto_increment=100;

select * from usuario;

create table personagens(
idPersonagens int primary key auto_increment,
nome varchar (45),
poder varchar (45),
fkUsuario int,
constraint fkUsuario foreign key (fkUsuario) references usuario (idUsuario),
fkCorte int,
constraint fkCorte foreign key (fkCorte) references corte (idCorte));

select * from personagens;

create table corte (
idCorte int primary key auto_increment,
nome varchar (45),
GraoSenhor varchar (45)
);

insert into corte values 
(null, 'Corte Primaveril', 'Tamlin'),
(null, 'Corte Outonal', 'Beron'),
(null, 'Corte Invernal', 'Kallias'),
(null, 'Corte Estival', 'Tarquin'),
(null, 'Corte Crespuscular', 'Thesan'),
(null, 'Corte Diurna', 'Helion'),
(null, 'Corte Noturna', 'Rhysand');

select * from corte;