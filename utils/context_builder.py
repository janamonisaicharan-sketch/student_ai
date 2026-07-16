from documents.manager import get_document


def build_context(user_id, question):
    context = ""

    # Get uploaded document
    document = get_document(user_id)

    if document:
        context += f"""
You have access to the student's uploaded document.

Filename:
{document['filename']}

Document Content:
{document['text']}
"""

    context += f"""

Student Question:
{question}

Answer ONLY using the uploaded document if the answer is present.
If the document doesn't contain the answer, clearly say that and then answer using your general knowledge.
"""

    return context