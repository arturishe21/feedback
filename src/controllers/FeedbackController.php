<?php
namespace Vis\Feedback;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Response;

use Vis\MailTemplates\MailT;

class FeedbackController extends Controller
{

    public function doSend()
    {
        parse_str(Input::get('filds'), $data);

        $mail = new MailT(Config::get('feedback::config.template_mail'), $data);
        $mail->to = Config::get('feedback::config.email_send');
        $mail->send();

        return Response::json(
            array(
                "status" => "success",
                "text" => __("Спасибо. Скоро с Вами свяжуться")
            ));
    }
}