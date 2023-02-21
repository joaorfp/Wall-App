import re

def valid_name(username):
    return len(username) >= 6

def valid_email(email):
    emailRegex = "^[a-zA-Z0-9-_]+@[a-zA-Z0-9]+\.[a-z]{1,3}$"
    return re.findall(emailRegex, email)

def valid_password(password):
    return len(password) >= 6