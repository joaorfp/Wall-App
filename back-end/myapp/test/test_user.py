from rest_framework.test import APITestCase
from django.urls import reverse
from rest_framework import status
from django.core import mail

class UserTestCase(APITestCase):
    def test_create_user(self):
        """This test will ensure that a user can be created"""
        url = reverse('users-list')
        data = {
            'username': 'username',
            'email': 'username@gmail.com',
            'password': 'password',
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_users(self):
        """This test will ensure that users can be listed"""
        url = reverse('users-list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    
    def test_send_email(self):
        """This test will ensure that the new user receives a welcome email"""
        url = reverse('users-list')
        username = 'username'
        data = {
            'username': username,
            'email': 'username@gmail.com',
            'password': 'password',
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(len(mail.outbox), 1)
        self.assertEqual(mail.outbox[0].subject, f'Welcome to Wall App, {username}.')
        self.assertEqual(mail.outbox[0].body, f'Welcome to Wall App, {username}. Feel free to write your messages on the wall!')
        self.assertEqual(mail.outbox[0].from_email, 'settings.EMAIL_HOST_USER')

    def test_login(self):
        """This test will ensure that the user can log in and get authenticated"""
        url = reverse('users-list')
        data = {
            'username': 'username',
            'email': 'username@gmail.com',
            'password': 'password',
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        
        url = reverse('api-token-auth')
        data = {
            'username': 'username',
            'password': 'password',
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        data = {
            'username': 'wrong_username',
            'password': 'password',
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

        data = {
            'username': 'username',
            'password': 'wrong_password',
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
