<?php

if (Request::ajax()) {
    Route::post('/feedback/send', array(
            'uses' => 'Vis\Feedback\FeedbackController@doSend')
    );
}