from django.db.models import (
    Model,
    CharField,
    TextField,
    BooleanField,
    ForeignKey,
    CASCADE,
)

class Message(Model):
    posted_message = TextField()
    is_active = BooleanField(default=True)
    title = CharField(max_length=100)
    owner = ForeignKey('auth.User', related_name='Messages', on_delete=CASCADE)

    def __str__(self):
      return self.title
