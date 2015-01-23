package com.rjug.jhipster2.web.websocket;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.rjug.jhipster2.web.websocket.dto.MessageDTO;
import com.rjug.jhipster2.web.websocket.dto.OutputMessageDTO;

@Controller
public class ChatService {

    private static final Logger log = LoggerFactory.getLogger(ChatService.class);

    @MessageMapping("/chat")
    @SendTo("/topic/message")
    public OutputMessageDTO sendMessage(MessageDTO message) {
    	return new OutputMessageDTO(message, new Date());
    }
}
