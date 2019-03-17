<!-- password -->
<div @include('crud::inc.field_wrapper_attributes') >
    <label>{!! $field['label'] !!}</label>
    @include('crud::inc.field_translatable_icon')

    <password-meter input="{{ $field['id'] ?? $field['name']  }}"></password-meter>

    <input id="{{ $field['id'] ?? $field['name']  }}" type="hidden" name="{{ $field['name'] }}">

    {{-- HINT --}}
    @if (isset($field['hint']))
        <p class="help-block">{!! $field['hint'] !!}</p>
    @endif
</div>
