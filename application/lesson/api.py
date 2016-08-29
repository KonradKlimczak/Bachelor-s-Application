from lesson.models import Test


def get_all_lessons(request):
    '''
    Returns lessons available
    '''

    tests = Test.object.all()
    
    return tests