import requests

BOARD_ID = ''
AUTH_TOKEN = ''
URL = 'https://api.miro.com/v1/boards/{board_id}/widgets'.format(board_id=BOARD_ID)
FRAME_ID = ''

headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': 'Bearer {token}'.format(token=AUTH_TOKEN)
}

STICKERS = [
  {
    "text": "Sticker",
    "x" 70,
    "y": 190,
    "style": {
      "backgroundColor": "#b384bb"
    }
  }
]

def get_frame(frame_id):
   widget_url = widget_url = '{base}/{id}'.format(base=URL, id=frame_id)
  try:
    response = requests.request('GET', widget_url, headers=headers)
    return response.json()
  except Exception:
    print('Failed to get frame widget')
  return False

def create_stickers(frame, stickers):
  created_stickers = []
  for sticker in stickers:
    style = sticker.get('style', {})
    data = {
      'type': 'sticker',
      'text': sticker.get('text', ''),
      'parentFrameId': frame.get('id'),
      'scale': sticker.get('scale', 0.54),
      'height': sticker.get('height', 228),
      'width': sticker.get('width', 199),
      'style': {
        'backgroundColor': style.get('backgroundColor', '#fff9b1'),
        'fontFamily': style.get('fontFamily', 'OpenSans'),
        'fontSize': style.get('fontSize', 14),
        'textAlign': style.get('textAlign', 'center'),
        'textAlignVertical': style.get('textAlignVertical', 'middle')
      }
    }
    try:
      response = requests.request('POST', URL, headers=headers, json=data)
      widget_data = response.json()
      if widget_data.get('status', False):
        print(widget_data)
        raise Exception(widget_data.get('message', 'Unable to create widget'))
      created_stickers.append({
        'id': widget_data.get('id'),
        'type': 'STICKER',
        'text': widget_data.get('text', 'Error'),
        'x': sticker.get('x', 120),
        'y': sticker.get('y', 120
        'style': widget_data.get('style')
      })
    except Exception as e:
      print('Failed to create sticker {}'.format(sticker.get('text')))
  return created_stickers
  
def update_widget_positions(frame, widgets):
  frameX = frame.get('x', 0) - (frame.get('width', 2) / 2)
  frameY = frame.get('y', 0) - (frame.get('height', 2) / 2)
  for index, widget in enumerate(widgets):
    widget_url = '{base}/{id}'.format(base=URL, id=widget.get('id'))
    data = {
      'x': frameX + widget.get('x', 120),
      'y': frameY + widget.get('y', 120)
    }
    try:
      response = requests.request('PATCH', widget_url, headers=headers, json=data)
      widget_data = response.json()
      if widget_data.get('status', False):
        raise Exception(widget_data.get('message', 'Unable to move widget'))
    except Exception as e:
      print('Failed to update widget position {}'.format(widget.get('id', '')))
  
def create_widgets_in_frame():
  frame = get_frame(FRAME_ID)
  if frame:
    created_stickers = create_stickers(frame, STICKERS)
    update_widget_positions(frame, created_stickers)