use colored::*;
use std::process;

#[derive(Debug)]
pub struct Config {
    pub path: String
}

impl Config {
    pub fn new() -> Self {
        return Self { path: "New String".to_string() }
    }
}