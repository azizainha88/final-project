module.exports = {
    validUsers: [
        { username: 'standard_user', password: 'secret_sauce' },
        { username: 'performance_glitch_user', password: 'secret_sauce' },
        { username: 'locked_out_user', password: 'secret_sauce' },
        { username: 'problem_user', password: 'secret_sauce' },
        { username: 'error_user', password: 'secret_sauce' },
        { username: 'visual_user', password: 'secret_sauce' }

    ],
    invalidUsers: [
        { username: '', password: '' },
        { username: 'standard_user', password: '' }
    ]
};