documents = {}


def save_document(user_id, filename, text):

    documents[user_id] = {

        "filename": filename,

        "text": text

    }


def get_document(user_id):

    return documents.get(user_id)


def remove_document(user_id):

    documents.pop(user_id, None)