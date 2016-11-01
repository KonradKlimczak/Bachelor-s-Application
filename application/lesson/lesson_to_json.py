'''
Manually serialization to json format.
'''

def list_to_json(tests, skip_questions=True):
    '''
    WARNGING THIS function skips questions!
    This funtion is valid only for list of Test objects.
    '''
    if not skip_questions:
        raise NotImplementedError('Including questions is not implemented!')

    tests_in_json = []

    for test in tests:
        test_json = {
            'id': test.id,
            'title': test.title,
            'description': test.description,
            'creator': test.creator.username,
            'category': test.category
        }

        tests_in_json.append(test_json)

    return tests_in_json
