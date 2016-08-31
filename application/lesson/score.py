
from lesson.models import Score

def get_user_score(user):
    '''
    Returns user information about lesson, he participated.
    '''

    if not user.is_authenticated():
        return {}

    score, created = Score.objects.get_or_create(owner=user)
    
    return {
        'tests_taken': score.tests_taken,
        'tests_passed': score.tests_passed,
        'recent_test': score.recent_test
    }