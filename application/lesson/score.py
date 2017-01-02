'''
Function with user logic conntected to tests
'''

from lesson.models import Score
from lesson.models import Test

def get_user_score(user):
    '''
    Returns user information about lesson, he participated.
    '''

    if not user.is_authenticated():
        return {}

    score, _created = Score.objects.get_or_create(owner=user)

    return {
        'tests_taken': score.tests_taken,
        'tests_passed': score.tests_passed,
        'recent_test': score.recent_test
    }

def count_lessons_created_by_user(user):
    '''
    Returns number of lessons created by given user.
    '''
    if not user.is_authenticated():
        return 0

    return user.test_set.all().count()
