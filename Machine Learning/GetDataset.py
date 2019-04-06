from base64 import b64decode
from Datum import Datum
from DatumRepository import DatumRepository
from ImageRepository import ImageRepository
from string import Template
import tensorflow as tf
import numpy as np

dataset = DatumRepository().read()
imageRepo = ImageRepository()

x = np.array(len(dataset))
y = np.array(len(dataset))

for i, item in enumerate(dataset):
	blobName = item.blobName
	imageBlob = imageRepo.read(blobName)
	image = b64decode(imageBlob.content)

	x[i] = tf.io.decode_jpeg(image, channels=3)
	y[i] = [item.contrast, item.brightness, item.temperature, item.saturation]
	
preprocessor = tf.keras.preprocessing.image.ImageDataGenerator(
	rotation_range=360,
	zoom_range=[0.5, 1.5],
	horizontal_flip=True,
	vertical_flip=True,
	validation_split=0.2,
	shear_range=30
)

awesomeDataset = preprocessor.flow(x, y)