<template>

	<div class="container" onload="">
	    <!-- Page Content goes here -->
		<div class="row">
			<div class="col s12 m12 l12 center">
				<p>foto de perfil</p>
			</div>
		</div>

		<div class="row">
			<div class="col s12 m6 l6 center">
				<div class="input-field col s12 m12 l12">
					<input placeholder="Emmanuel Beltran Fuentes" id="full_name" type="text" class="validate">
					<label for="full_name">Nombre</label>
				</div>

				<div class="input-field col s12 m12 l12">
					<input placeholder="mail@correo.com" id="email" type="email" class="validate">
					<label for="email">Email</label>
				</div>

				<div class="input-field col s12 m12 l12">
					<input placeholder="5520163598" id="phone" type="text" class="validate">
					<label for="phone">Telefono</label>
				</div>

				<div class="input-field col s12 m12 l12">
					<input placeholder="www.mysite.com" id="web_site" type="text" class="validate">
					<label for="web_site">Sitio Web</label>
				</div>

				<div class="col s6">
          <div class="col s6">
            <p>Select</p>
          </div>
				</div>
				<!-- <div class="col s2">
          <a class="btn-floating waves-effect waves-light Black" v-on:click="pushIdioma()">
            <i class="material-icons">add</i>
          </a>
        </div> -->

				<div class="input-field col s12 m6 l12">
					<textarea id="textarea1" class="materialize-textarea"></textarea>
				 	<label for="textarea1">Acerca de ti</label>
				</div>
			</div>


		<div class="col s12 m6 l6 center">
			<div class="col s6">
				<div class="col s16">
					<p>Select</p>
				</div>
			</div>
				<!-- <div class="col s2">
					<a class="btn-floating waves-effect waves-light red" v-on:click="pushCinta()">
						<i class="material-icons">add</i>
					</a>
				</div> -->
				<!-- <div class="col s12">
					<ul>
						<li v-bind:key="item" v-for="item in cv.cintas">{{item}}</li>
					</ul>
				</div> -->

				<div>
          <div class="col s12 m12 l12 input-field">
            <input type="text" name="skill" id="skill" v-model="skill">
            <label for="skill">Skill</label>
          </div>
					<!-- <div class="col s2">
            <a class="btn-floating waves-effect waves-light black" v-on:click="pushSkill()">
              <i class="material-icons">add</i>
            </a>
          </div> -->
				</div>

				<div class="input-field col s12 m12 l12">
					<input placeholder="https//app.url.com" id="twitter" type="url" class="validate">
					<label for="web_site">Twitter</label>
				</div>

				<div class="input-field col s12 m12 l12">
					<input placeholder="https//app.url.com" id="facebook" type="url" class="validate">
					<label for="web_site">Facebookr</label>
				</div>

				<div class="input-field col s12 m12 l12">
					<input placeholder="https//app.url.com" id="linkedin" type="url" class="validate">
					<label for="web_site">Linkedin</label>
				</div>

				<div class="input-field col s12 m12 l12">
					<input placeholder="https//app.url.com" id="github" type="url" class="validate">
					<label for="web_site">Github</label>
				</div>
			</div>
		</div>
		<div class="col s12 m12 l12 center">
			<button class="btn" type="submit" name="action">Enviar
	 			<i class="material-icons right">send</i>
 			</button>
		</div>
	</div>


</template>
