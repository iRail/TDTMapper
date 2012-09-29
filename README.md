# Pieter Colpaert's collected PHP tools

This is a folder which I use to bootstrap my projects in combination with the HTML5 boilerplate you can find at http://html5boilerplate.com/.

It is a simple micro framework which adds some missing things to PHP 5.3: decent caching, simple 1 line data fetcher, a router (glue), error logging...

# How to use

This is a basic LAMP thing. (Linux, apache, mysql, php 5.3)

You can plugin your own cache, get file contents, and so on.

# Getting started

The Router does all the magic. Include your regex and map it to a class name. Include that class and implement the functions you need:
public function GET($matches){
    $matches; //matches your regex
}

# License

Code written by myself in this repository can be used under the BeerPL revision 42. This means if you see me in person and you make use of this repository, you'have to buy me a beer.

© 2012 Pieter Colpaert - Almost no rights reserved
