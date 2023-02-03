import re

def valid_name(name):
    return len(name) >= 6

def valid_email(email):
    emailRegex = "/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm"
    return re.findall(emailRegex, email)

def valid_password(password):
    return len(password) >= 6